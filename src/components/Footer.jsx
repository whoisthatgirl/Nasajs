export default function Footer(prpos) {
    const { showModal , handleModal , data}=prpos

    return (
        <footer>
            
            <div className="back">
                <h2>{ data ?.title}</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleModal}>

       <i className="fa-solid fa-circle-info"></i>


            </button>

        </footer>



    )
}

