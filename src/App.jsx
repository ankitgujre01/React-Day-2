// const name = 'Ankit Gujre'
// const age = 25
// const profession = 'Software Developer'
// Topic is jsx expression
//paretheses is only for designing its create by my self 

const Detail = <table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Profession</th>
  </tr>
  <tr>
    <td>Ankit Gujre</td>
    <td>25</td>
    <td>Software Developer</td>
  </tr>
  <tr>
    <td>Shubham Gujre</td>
    <td>21</td>
    <td>Student</td>
  </tr>
</table>
const App = () => {
    return (
      <>  
        {/* fragment lagane se extra node create nahi hota memory me */}
      {/* // <h1>My Name is ({name}) my age is ({age}) my profession is ({profession}) </h1> */}
      
        <h1>{Detail}</h1>
        <br>
        </br>
        <h2>Next line</h2>
        <h2>Hello World</h2>
        
        </>
    )
}

export default App