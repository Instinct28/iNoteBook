import React from 'react'

const NoteItem = (props) => {

    const {element} = props;

  return (
    <div className='col-md-3'>
        <div className='card my-3'>
            <div className='card-body'>
                <h5 className='card-title'>{element.title}</h5>
                <p className='card-text'>{element.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam odio quod possimus iusto amet placeat eos. Porro molestias vitae dicta, at id laboriosam, repellat illo sunt in, mollitia officiis.</p>
            </div>
        </div>
    </div>
  )
}

export default NoteItem
