import axios from 'axios'

export const textoSubmit= (texto) => {
    axios.post(`http://localhost:3000/watson`, {texto}, {withCredentials: true})
    .then(res => {
        localStorage.setItem('texto', JSON.stringify({texto: res.data.texto}))
        console.log('-------------------------');
        console.log(res)
        var l = res.data.emotion;
        var percentilH = [];
        l.forEach((a)=>{
            percentilH.push(a.percentil)
        })
        console.log(percentilH)
        localStorage.setItem('percentil', percentilH)
        console.log(localStorage.getItem('percentil'))
        return percentilH
    })
    .catch(error =>{
        console.log(error)
    })
}
    
/*export const percentilRender= (emotion) => {
    axios.get(`http://localhost:3000/emotion`, {emotion}, {withCredentials: true})
    .then(res => {
        localStorage.getItem('emotion', JSON.parse({emotion: res.data.emotion}))
        console.log(res)

    })
    .catch(error =>{
        console.log(error)
    })
}*/
    
