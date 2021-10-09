
import React from 'react'

export default function ServiceProviderCategoryScreen(props) {
    return (
        <div>
            <h1>Choose a Category</h1>
        <div>
            <label />
            <button className="primary" type="submit">
              Hotel Service Provider Register
            </button>
          </div>
          <div>
            <label />
            <button className="primary"  onClick={() =>
                                props.history.push(`/guideRegister`)
                                }>
              Guide Register
            </button>
          </div>
          
      </div>
    )
}

