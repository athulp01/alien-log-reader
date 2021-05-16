
function Entry({ time, location, tag, issued }) {
  let datetime = new Date(time)
  issued = issued==0?"No":"Yes"
    return (
            <tr className={issued=="No"?"bg-red-500":""}>
                <td className="text-center border-2 border-black">
                    <p>{datetime.toLocaleString()}</p>
                </td>
                <td className="border-2 text-center  border-black">
                    <p>{tag}</p>
                </td>
                <td className="border-2 border-black text-center ">
                    <p>{issued}</p>
                </td>
                <td className="border-2 border-black text-center ">
                    <p>{location}</p>
                </td>
            </tr>
    );
}

export default Entry;
