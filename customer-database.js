const customerContainer = document.querySelector("#customerContainer");
// create empty container to put the variable in. Not yet visbale on the page

function buildDirectory(customerArray) {
    for (let customer of customerArray) {
        let customerDiv = document.createElement("div");
        let thumbnail = document.createElement("img")
        let name = document.createElement("h3");
        let street = document.createElement("p");
        let area = document.createElement("p");
        let phoneNumbers = document.createElement("p");
        let DOB = document.createElement("p");
        let customerSince = document.createElement("p");
        

        thumbnail.classList.add("headshot");
        
        
        thumbnail.src = `${customer.picture.thumbnail}`;
        name.innerText = `${capitalizeFirstLetter(customer.name.title)} ${capitalizeFirstLetter(customer.name.first)} ${capitalizeFirstLetter(customer.name.last)}`;
        street.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
        area.innerText = `${customer.location.city} ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`;
        phoneNumbers.innerText = `Phone: ${customer.phone} Cell:${customer.cell}`;
        DOB.innerText = `D.O.B: ${moment(customer.dob.date).format("MMM Do YY")}`;
        customerSince.innerText = `Customer Since: ${moment(customer.registered.date).format("MMM Do YY")}`;
        
        customerDiv.appendChild(thumbnail);
        customerDiv.appendChild(name);
        customerDiv.appendChild(street);
        customerDiv.appendChild(area);
        customerDiv.appendChild(phoneNumbers);
        customerDiv.appendChild(DOB);
        customerDiv.appendChild(customerSince)
        
        customerContainer.appendChild(customerDiv);
        customerDiv.classList.add("customer");
        
        
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

buildDirectory(customers)
