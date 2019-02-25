import React, { Component } from 'react'


class App extends Component {
  state = {
    easy: 0,
    intermediate: 0,
    hard: 0,
    games: []
  };





  render() {
    return (
      <>
      <header>
        <h1>Ba BOOM!</h1>
      </header>
<section className="scoreboard">
<section className="counter"></section>
<section className="timer"></section>
</section>
    )
  }
}

<section className="gameboard">
<table>
  <tr> 
    <td>
      <button className="click_left_check">Check!</button>
      <button className="click_right_flag">Flag</button>
    </td>
  </tr>

</table>
</section>

export default App
