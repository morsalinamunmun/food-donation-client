import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
 
const TABLE_HEAD = ["Food Name", "Date", "Status", ""];
 
 
const FoodTable =() => {
  const foods = useLoaderData();
  const [foodItems, setFoodItems] = useState([]);

  const handleDelete = (_id) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://food-donation-server-five.vercel.app/food/${_id}`, {
            method: "DELETE"
          })
          .then(res=> res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Request has been Cancel.',
                    'success'
                )   
                const remaining = foodItems.filter(cancelRequest=> cancelRequest.id !== _id)
                setFoodItems(remaining); 
            }
          })
        }
      })
}
  return (
    <div className="max-w-7xl mx-auto">
    <Navbar></Navbar>
    <Card className="h-full w-full bg-orange-200 overflow-scroll my-10 max-w-6xl mx-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {foods.map(({ foodName,  date, _id }, index) => {
            const isLast = index === foods.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {foodName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <Link to={`/updateFood/${_id}`}>Update</Link>
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <button onClick={()=>handleDelete(_id)}>Delete</button>
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <Link to={`/singleFood/${_id}`}>Manage</Link>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Footer></Footer>
    </div>
  );
}

export default FoodTable;