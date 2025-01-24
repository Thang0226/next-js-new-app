
export default async function Student({params}) {

    let id = (await params).id;

    return (
        <div>
            <h2>Student Information</h2>
            <p>Student ID: {id}</p>
        </div>
    );
};