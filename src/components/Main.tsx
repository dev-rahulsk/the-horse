import React from 'react'

const Main = (props: { data: userData[], category: string }) => {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full p-10 justify-center">
        {
          props.data.map((val) => {
            if (props.category === "") {
              return (
                <div key={val.id} className="card rounded-box place-items-center">
                  <div className="card card-compact bg-base-100 shadow-xl">
                    <figure className='aspect-square '>
                      <img src={val.image} className='w-52 h-52 object-scale-down' alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title line-clamp-1">{val.title}</h2>
                      <p className="overflow-ellipsis line-clamp-2">{val.description}</p>
                      <div className="card-actions items-center justify-between py-2">
                        <h2 className="card-title font-medium text-lg line-clamp-1">${val.price}</h2>
                        <button className="btn bg-green-500">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            else if (val.category === props.category) {
              return (
                <div key={val.id} className="card rounded-box place-items-center">
                  <div className="card card-compact bg-base-100 shadow-xl">
                    <figure className='aspect-square '>
                      <img src={val.image} className='w-52 h-52 object-scale-down' alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title line-clamp-1">{val.title}</h2>
                      <p className="overflow-ellipsis line-clamp-2">{val.description}</p>
                      <div className="card-actions items-center justify-between py-2">
                        <h2 className="card-title font-medium text-lg line-clamp-1">${val.price}</h2>
                        <button className="btn bg-green-500">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </>
  )
}

export default Main
