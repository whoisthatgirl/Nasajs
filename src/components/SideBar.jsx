


export default function SideBar(props) {
    const { handleModal, data } = props
    return (
        <div className="sidebar">
            <div onClick={handleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

