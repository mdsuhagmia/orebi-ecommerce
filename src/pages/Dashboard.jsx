import Container from "../components/Container";

const Dashboard = () => {
  return (
    <section>
      <Container>
        <div className="w-1/2">
          <p className="mb-8">
            Hello <span className="font-semibold">admin</span> (not admin?
            <button className="text-blue-600 hover:underline text-sm cursor-pointer">Log out</button>)
          </p>
          <h6 className="text-gray-700 w-3xl">
            From your account dashboard you can view your <span className="font-semibold">recent orders</span>,
            manage your <br /> <span className="font-semibold">shipping and billing addresses</span>, and edit your
            <span className="font-semibold"> password</span> and account details.
          </h6>
        </div>
      </Container>
    </section>
  );
};

export default Dashboard;