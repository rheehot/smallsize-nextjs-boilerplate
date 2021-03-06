import Head from 'next/head';
import GlobalLayout from '@/containers/layout/GlobalLayout';

import { SITE_URL, SITE_NAME, SITE_DESC } from '@/config';
import { ROUTE } from 'utils/constant';
import { buildLog } from 'utils';
import Counter from '@/components/Counter';
import LoginForm from '@/components/Form/LoginForm';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
const log = buildLog('page:home');

export default function Home() {
    const seoConfig = {
        url: `${SITE_URL}`,
        title: `${SITE_NAME}`,
        description: `${SITE_DESC}`,
    };

    const router = useRouter();

    return (
        <GlobalLayout page={ROUTE.HOME} seoConfig={seoConfig}>
            <>
                <Head>
                    <title>JodSol</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <LoginForm />
                <main>
                    <Counter />
                    <button
                        type="button"
                        onClick={() => router.push('/post/1')}
                    >
                        이동
                    </button>
                </main>

                <footer></footer>
            </>
        </GlobalLayout>
    );
}
