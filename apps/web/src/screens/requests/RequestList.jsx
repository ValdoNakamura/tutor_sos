import React from 'react'
import Card from '../../components/Card'
import CardIcon from '../../components/CardIcon'


const RequestList = () => {
    return (
        <>
            <section className="flex flex-wrap w-full pt-5 justify-center gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </>
    )
}

export default RequestList
