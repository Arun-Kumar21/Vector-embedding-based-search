import React from "react";
import io from "socket.io-client";

import Container from "@/components/container";
import FileUploadForm from "@/components/file-upload/form";
import Footer from "@/navigation/footer";
import Nav from "@/navigation/nav";

function Home() {
  const [socket, setSocket] = React.useState<any>();

  React.useEffect(() => {
    const socket = io("http://localhost:5000");
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Container>
      <div className="w-full min-h-screen relative">
        <Nav />

        <FileUploadForm />

        <div className="text-zinc-800 text-sm relative">
          <h1 className="">Before you proceed:</h1>
          <ul className="list-disc list-inside">
            <li>Ensure the file is UTF-8 encoded.</li>
            <li>
              Paste or upload MDX, PDF, or text files and select corresponding
              format.
            </li>
            <li>
              For large files, chunking will be applied to improve indexing.
            </li>
            <li>
              Use clear and specific keywords for more accurate search results.
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </Container>
  );
}

export default Home;
