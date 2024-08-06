import React from "react";

export class SideBar extends React.Component
{
     constructor(){
        super();
     }
     render(){
        return(
            <div>
                <nav className="w-25 p-2 bg-light">
                    <ul className="list-unstyled">
                       <h3>{this.props.title}</h3>
                       {
                        this.props.navitems.map(item=> <li key={item} className="p-2 my-3 bg-secondary text-white rounded rounded-2" >{item}</li>)
                       }
                    </ul>
                </nav>
            </div>
        )
     }
}