import { Fragment } from 'react'
import React from 'react'
import { MongoClient } from "mongodb"
import BlogItem from '../../components/BlogItem'

export default function BlogDetails(props) {
    const {blog: {title, image, description, details}} = props

return (
    <Fragment>
        <h1>details blog</h1>
        <div className='flex flex-col'>
            <BlogItem title={title} image={image} description={description} details={details}/>
        </div>
    </Fragment>
)
}

export async function getStaticPaths () {
    const client = await MongoClient.connect(
        "mongodb+srv://zecht13:gilangertan13@cluster0.iqjxyul.mongodb.net/?retryWrites=true&w=majority"
        );
    const blogPostCollection = client.db().collection("posts")
    const blogPosts = await blogPostCollection.find({}, {_id: 1}).toArray()
    client.close()

    return{
        paths: blogPosts.map( ({slug}) => ({
            param: {slug},
        })),
        fallback: false,
    }
}
export async function getStaticProps (context) {
    const blogID = context.param.slug
    const client = await MongoClient.connect(
        "mongodb+srv://zecht13:gilangertan13@cluster0.iqjxyul.mongodb.net/?retryWrites=true&w=majority"
        );
    const blogPostCollection = client.db().collection("posts")
    const blogPost = await blogPostCollection.findOne({slug: blogID});
    client.close()
    return{
        props: {
        blog: { title: blogPost.title,
            description: blogPost.description,
            details: blogPost.details,
            image: blogPost.image}
        }
    }
}
export async function getStaticProps () {}