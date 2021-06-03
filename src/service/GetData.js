import React from "react";
// const _apiBase = process.env.REACT_APP_API_KEY

class GetData extends React.Component {
    constructor() {
        super();
        this._apiBase = "http://127.0.0.1:8000"
    }

    async getData(url) {

        const res  = await fetch(`${this._apiBase}${url}`, {
            method: "GET"
        })
        return res.json()
    }

    async getDataWithToken(url, token){
        const res = await  fetch(`${this._apiBase}${url}`, {
            method: "GET",
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + token
            }
        })
        return res.json()
    }



    async setDataPro(token, url, body){
        const res = await fetch(`${this._apiBase}${url}`, {
            method: "POST",
            body: body,
            headers: {"Authorization": "Token " + token},
        })
        return res.json()
    }


    async login(url, body) {

        const res = await fetch(`${this._apiBase}${url}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        return res.json()
    }

}
export default GetData