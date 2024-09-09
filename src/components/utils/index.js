export const getAnswers = () =>{
    const data = JSON.parse(localStorage.getItem('user'))
    return data ? data.answers : {}
}

export const saveTheChange = (id, answer) =>{
    const data = JSON.parse(localStorage.getItem('user')) || {answers : {}}
    data.answers[id] = answer
    localStorage.setItem('user', JSON.stringify(data))
}


export const saveAnswersInLocalStorage = () =>{
    const data = JSON.parse(localStorage.getItem('user')) || {answers : {}}
    data.status = "COMPLETED"
    localStorage.setItem('user', JSON.stringify(data))
}