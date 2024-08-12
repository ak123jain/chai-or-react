 

function  customRender(mainContainer , reactElement) {
    // const domelement = document.createElement(reactElement.type)
    // domelement.innerHTML = reactElement.children
    // domelement.setAttribute('href', reactElement.props.href)
    // domelement.setAttribute('target', reactElement.props.target)
    // mainContainer.appendChild(domelement)

    const domelement = document.createElement(reactElement.type)
    domelement.innerHTML = reactElement.children

    for (const prop in  reactElement.props) {
        if(prop == 'children') continue;

        domelement.setAttribute(prop, reactElement.props[prop])
    }

    mainContainer.appendChild(domelement)
}

 


const reactElement = {
    type : 'a',
    props:{
        href: 'https://google.com',
        target : '_blank'
    },
    children: "click me to visit"
}



const mainContainer = document.querySelector('#root')


customRender(mainContainer, reactElement)

 










