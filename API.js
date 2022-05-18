// const url = "https://reqres.in/api/users?page=2";
// const url = "https://reqres.in/api/users/dhfbsdhfshbf/231387424"; //to get 404
// const url = "start-file-Json";
fetch("./data.json").then( response => { 
    // console.log(response); //to get 404 with response status
    // if (!response.ok) {
    //     throw Error("error")
        
    // }
    // console.log("connect")
    // console.log(response)
// or 
// console.log(response.json());

// or 

    return response.json();}).then(data =>{

        // console.log(data.data);
        console.log(data.data);
// firts name الي هو اسم الكولوم بالداتا 
        const html = data.data.map(student => {
            return `
            <div class="student">
            
            <p>Name: ${student.first_name}</p>
           
            <p>mail: ${student.email}</p>

           
            </div>`;
        }).join('');
        console.log(html);
        // <p><img src="${user.avatar}" alt="${user.first_name} /></p>
        // <p>Name: ${user.name}</p>
        // <p>Name: ${user.password}</p>
        // <p>Name: ${user.phone}</p>
        // <p>Name: ${user.email}</p>
    // لعرض الذاتا عللى الصفحة
    // console.log(data.sentence);  
    // document.querySelector("#debug").innerText = data.sentence
    // document.querySelector("#debug").innerHTML = '<h1>Hello Fetch</h1>'
    document.querySelector("#debug").insertAdjacentHTML ("afterbegin", html)
}).catch(error =>{
        

    console.log(error);   
})

function postDate() {
    
    fetch("./data.json", {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            name: "mohamad",
            job: "leader"

        })
    }).then( response => { ;
        // console.log(response); //to get 404 with response status
        if (!response.ok) {
            throw Error("error")
            
        }
        return response.json()}).then(data =>{

            console.log(data.data);
    
    }).catch(error =>{
        

        console.log(error);   
    })
}
postDate();