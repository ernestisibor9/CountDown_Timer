const countries = ['France', 'Nigeria', 'USA', 'England', 'Germany', 'China'];
const hello = document.getElementById('hello')
console.log(hello);

function displayCountries () {

    setTimeout(()=>{
        let html = 'COUNTRIES'
            html += '<ul>'
            countries.forEach((country)=>{
                html += `
                    <li>${country}</li>
                `
            html += '</ul>'
            })
            document.body.innerHTML = html

    }, 2000)
    
}

displayCountries()

const jsonMe = document.getElementById('jsonMe')

//let html = ''
      jsonMe.addEventListener('click', function () {
        fetch('https://jsonplaceholder.typicode.com/photos/')
            .then((response)=>{
                //console.log(response.json());
                return response.json()
                console.log(response.json());
            })
            .then((data)=>{
                console.log(data);
                let html = '';
                data.forEach((pic)=>{
                    html += `
                        <h5>${pic.title}</h5>
                        <li><a target = "_blank" href = "${pic.url}">View Image</a>&nbsp;
                        </li>

                    `
                })
                document.body.innerHTML = html;
            })
            .catch(function (error) {
                console.log(error);
            })

        //     .then(function (response) {
        //         console.log(response);
        //     //return response.json();
        // })
    //        .then(function (data) {
    //        console.log(data);
    //    })
      })


// function name() {
//     fetch('https://ernzotech.com.ng')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// }

// name()



