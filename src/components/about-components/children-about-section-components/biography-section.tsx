export default function BiographySection() {
  return (
    <div className="grid grid-cols-4 gap-[2px] w-[500px] mr-[150px]">
      <div className=" min-w-fit grid justify-center">
        <p>Birthday</p>
        <p>Age</p>
        <p>Residence</p>
        <p>Address</p>
      </div>
      <div className=" min-w-fit grid justify-center">
        <p>23rd March 2002</p>
        <p>23 Years</p>
        <p>Medan</p>
        <p>Medan, Indonesia</p>
      </div>
      <div className=" min-w-fit grid justify-center">
        <p>Email</p>
        <p>Phone</p>
        <p>linkid</p>
        <p>Freelance</p>
      </div>
      <div className=" min-w-fit grid justify-center">
        <p>farhanzulkarnaenhrp@gmail.com</p>
        <p>0819-5816-9283</p>
        <p>Farhan</p>
        <p>Not Available</p>
      </div>
    </div>
  );
}
