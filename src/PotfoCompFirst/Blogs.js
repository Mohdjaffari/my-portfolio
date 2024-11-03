import React from 'react'

export default function Blogs() {
    const blogPosts=[
        {
            postPic:'/image/me.jpg',
            postName:'Business',
            postDate:'3 / November / 2024',
            postTitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ex totam facere officia! Iste reiciendis omnis doloremque labore, harum aperiam sunt reprehenderit perferendis in modi, pariatur cumque quae natus?'
        },
        {
            postPic:'/image/me.jpg',
            postName:'Business',
            postDate:'3 / November / 2024',
            postTitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ex totam facere officia! Iste reiciendis omnis doloremque labore, harum aperiam sunt reprehenderit perferendis in modi, pariatur cumque quae natus?'
        },
        {
            postPic:'/image/me.jpg',
            postName:'Business',
            postDate:'3 / November / 2024',
            postTitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ex totam facere officia! Iste reiciendis omnis doloremque labore, harum aperiam sunt reprehenderit perferendis in modi, pariatur cumque quae natus?'
        },
        {
            postPic:'/image/me.jpg',
            postName:'Business',
            postDate:'3 / November / 2024',
            postTitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ex totam facere officia! Iste reiciendis omnis doloremque labore, harum aperiam sunt reprehenderit perferendis in modi, pariatur cumque quae natus?'
        },
    ]
  return (
    <div>
        <div className="blogs-container" id='blogs-container-ss'>
            <p>|| Blogs</p>
            <h1>Latest Tips & Tricks</h1>
            <div className="blogs-content" id='blogs-content-ss'>
                <ul>
                    {blogPosts.map((blogpost,index)=>(
                         <li key={index}>
                         <div className="blog-post-pic" id='blog-post-pic-ss'>
                             <img src={blogpost.postPic} alt="" />
                         </div>
                         <div className="blogs-post-detail" id='blogs-post-detail-ss'>
                             <div className="name-date" id='name-date-ss'>
                                 <h2>{blogpost.postName}</h2>
                                 <h5>{blogpost.postDate}</h5>
                             </div>
                             <div className="title" id='title-ss'>
                                 <h3>{blogpost.postTitle}</h3>
                             </div>
                         </div>
                         <div className="blog-post-btn" id='blog-post-btn-ss'>
                             <button>Learn More</button>
                         </div>
                     </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
