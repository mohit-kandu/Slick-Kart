import React from 'react'
import "../MainBody/Content/Content.css"
import "./Loading.css"

export default function Loading({ title }) {
    return (
        <div className="content_suggested_container">
            <div className="content_suggested_subcontainer">
                <div className="content_suggested_title">
                    <h2>{title}</h2>
                </div>
                {/* <div className="content_suggested_items">
                    <div style={{ width: '90vw', margin: '1em auto', color: 'gray', textAlign: 'center' }}><h1>Loading items...</h1></div>
                </div> */}
                <div className="loading_box">
                    <div className="loader"></div>
                </div>
            </div>
        </div>
    )
}
