import Link from "next/link";
import Container from "@/components/container";
import { mutate } from "swr";
import Button from "../button";

export default function Nav({ title = "Alien Reader Log" }) {
    return (
        <Container className="py-4">
            <nav>
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <a className="font-bold text-3xl">{title}</a>
                    </Link>
                    <Button
                        onClick={() => {
                            // set the cookie as expired
                            document.cookie =
                                "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

                            // tell all SWRs with this key to revalidate
                            mutate("/api/get-entries");
                        }}
                    >
                        Refresh
                    </Button>
                </div>
            </nav>
        </Container>
    );
}
