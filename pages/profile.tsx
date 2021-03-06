import { useSession } from 'next-auth/client';
import Layout from '../components/layout';
import { Image } from 'react-bootstrap';
import { useRouter } from 'next/router'

const Profile = ({ data }: { data: string }) => {
  const router = useRouter()
  const [session, loading] = useSession();

  if (loading) return <div>loading...</div>;
  if (!session) return <div>{router.push('/')}</div>;

  return (
    <Layout>
      {session && (
        <>
          <h1>{session.user.name}</h1>
          <Image src={session.user.image} roundedCircle className="avatar" />
          <br />
          <br />
          <p>Build: {data}</p>
        </>
      )}

      <style jsx>{`
        .avatar {
          width: 220px;
          border-radius: 10px;
        }
      `}</style>
    </Layout>
  );
};

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = new Date().toString()

  // The value of the `props` key will be
  //  passed to the `Home` component
  return { props: { data } }
}

export default Profile;