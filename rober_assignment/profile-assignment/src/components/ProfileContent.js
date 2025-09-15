function ProfileContent() {
  return (
    <main className="bg-blue-300 flex-1 p-4 ">
      <h2 className="text-xl font-bold">My Personal</h2>

      <div className="space-y-3">
        <p>
          <span className="text-black mb-4">Full Name:</span> Niña Mae Rober
        </p>
        <div>
          <span className="text-black  mb-4 ">Course:</span>
          <p className="text-gray-700">
            I'm a student from St.Peters College taking up Bachelor of Science
            in Information Technology.
          </p>
        </div>
        <div>
          <span className="font-semibold block  mb-4">Hobbies:</span>
          <p className="text-gray-700 ">
            I like playing Volleyball and watching movies also listening music.
          </p>
        </div>
      </div>
    </main>
  );
}
export default ProfileContent;
