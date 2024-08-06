export function EventDemo(){


    function NavBarClick(){
        alert('Navbar Clicked');
    }
    function SearchClick(e){
        e.stopPropagation();
        alert('Search Clicked');
    }

    function handleSubmit(e){
        e.preventDefault();
        alert('Submitted..');
    }
   

    return(
        <div className="container-fluid">
            <h2>Event Demo</h2>
            <nav onClick={NavBarClick} className="p-3 bg-dark text-white">
                <h2>Navbar</h2>
                <button onClick={SearchClick} className="bi bi-search btn btn-primary"></button>
            </nav>
            <section className="mt-4">
                <form onSubmit={handleSubmit}>
                    User Name : <input type="text" name="UserName" /> <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    )
}