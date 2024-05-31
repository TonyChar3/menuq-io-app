export default function Overview() {
  return (
    <>
      <div className="w-full h-full">
        <div>
          {/* Container for the active menu */}
          <div>
            <h2>Active Menu Overivew</h2>
          </div>
        </div>
        <div>{/* Container for the Restaurant Infos */}</div>
        <div>
          {/* Sharing options for the menu */}
          <h3>Link</h3>
          <input type="text" placeholder="input for the link of the menu" />
          <h3>Socials</h3>
          <h3>Generate a QR code</h3>
          <div>{/* Overview of the QR code of the menu */}</div>
        </div>
      </div>
    </>
  );
}
