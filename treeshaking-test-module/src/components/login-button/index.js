import React from 'react'

document.body.innerHTML = document.body.innerHTML + "<div>This is a side effect and should never have happened</div>"

export default () => <button>Login</button>
