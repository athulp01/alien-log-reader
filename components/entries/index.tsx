import Entry from './entry'

function Entries({ entries }) {
  if (entries) {
    return (
      <table className="table-fixed border-collapse" >
      <tr>
        <th className="w-64 border-2 border-l-2 border-black">Time</th>
        <th className="w-64 border-2 border-black">Tag</th>
        <th className="w-64 border-2 border-black">Is Issued</th>
        <th className="w-64 border-2 border-r-2 border-black">Location</th>
      </tr>
        {entries.map((e) => (
            <Entry time={e.time} tag={e.tag} location={e.location} issued={e.issued} />
        ))}
        </table>
    )
  } else {
    return null
  }
}

export default Entries
