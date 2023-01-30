import Head from 'next/head'
import BlogItem from '../components/BlogItem'
import { Fragment } from 'react'
import { MongoClient } from 'mongodb'


export default function Home(props) {
  console.log(props)
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='pt-24 bg-slate-200 text-center pr-96 font-extrabold text-xl'>Blog Page</h1>
      {props.blogPosts.map(blog => 
      <div key={blog.id} className='flex flex-col'>
        <BlogItem 
        title={blog.title} 
        image={blog.image} 
        description={blog.description} 
        details={blog.details}/>
      </div>)}
    </Fragment>
  )
}

export async function getStaticProps (context){

  const client = await MongoClient.connect(
    "mongodb+srv://zecht13:gilangertan13@cluster0.iqjxyul.mongodb.net/?retryWrites=true&w=majority"
  );

  const blogPostCollection = client.db().collection("posts")

  const blogPosts = await blogPostCollection.find().toArray()


  client.close()
  return {
    props: {
      blogPosts: blogPosts.map(blog => ({
        id: blog._id.toString(),
        slug: blog.slug,
        title: blog.title,
        image: blog.image,
        description: blog.description,
        details: blog.details,
      }))
    },
    revalidate: 3600,
  }
}
