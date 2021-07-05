import {toast} from "react-toastify";

export const CART = {
    KEY: 'bkasjbdfkjasdkfjhaksdfjskd',
    contents: [],
}

export let PRODUCTS = [];

   export const  init = () => {
       let _contents = localStorage.getItem(CART.KEY);
       if(_contents){
           CART.contents = JSON.parse(_contents);
       }else{
           //dummy test data
           CART.contents = [
                {id: 9, image: "http://127.0.0.1:8000/media/product/2_r0EP3DU.jpg", title: "Персики иранские"},
                {id: 1, image: "http://127.0.0.1:8000/media/product/kap_ZX088R1.jpg", title: "Банан", price: "127.00"},
                {id: 5, image: "http://127.0.0.1:8000/media/product/1_5fBWVlw.jpg", title: "Кандек", price: "232.00"}
           ];
           CART.sync();
       }
    }

    export const sync = async () => {
        console.log(CART.contents)
        let _cart = JSON.stringify(CART.contents);
        await localStorage.setItem(CART.KEY, _cart);
        init()
    }



   export const  find = (id) => {
        //find an item in the cart by it's id
        let match = CART.contents.filter(item=>{
            if(item.id == id)
                return true;
        });
        if(match && match[0])
            return match[0];
    }


    export const add = (id, image, title, price , percent) => {
       const found = CART.contents.find(items => {
           if(items.id === id){
               return -1
           }
       })
        //add a new item to the cart
        //check that it is not in the cart already
        if(found === -1){
            reduce(id, 1);
        }else{
                let obj = {
                    id: id,
                    image: image,
                    title: title,
                    price: price,
                    saleP: percent,
                    quantity: 1,
                };
                CART.contents.push(obj);
                toast.success("Вы успешно добавили")
                //update localStorage
                sync();
            }
        }


    export const increase = (id, qty=1) => {
        //increase the quantity of an item in the cart
        CART.contents = CART.contents.map(item=>{
            if(item.id === id)
                item.quantity = item.quantity + qty;
            return item;
        });
        //update localStorage
        sync()
    }

    export const reduce = (id, qty=1) => {
        //reduce the quantity of an item in the cart
        CART.contents = CART.contents.map(item=>{
            if(item.id === id)
                item.quantity = item.quantity - qty;
            return item;
        });
        CART.contents.forEach(async item=>{
            if(item.id === id && item.quantity === 0)
                await CART.remove(id);
        });
        //update localStorage
        sync()
        init()
    }


    export const remove = (id) => {
        //remove an item entirely from CART.contents based on its id
        CART.contents = CART.contents.filter(item=>{
            if(item.id !== id)
                return true;
        });
        //update localStorage
        sync()
    }

    export const empty = () => {
        //empty whole cart
        CART.contents = [];
        //update localStorage
        sync()
    }

    // sort(field='title'){
    // //sort by field - title, price
    // //return a sorted shallow copy of the CART.contents array
    // let sorted = CART.contents.sort( (a, b)=>{
    //     if(a[field] > b[field]){
    //         return 1;
    //     }else if(a[field] < a[field]){
    //         return -1;
    //     }else{
    //         return 0;
    //     }
    // });
    // return sorted;
    //NO impact on localStorage
// }


