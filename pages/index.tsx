import Skeleton from "react-loading-skeleton";
import React, { useState } from "react";

import Nav from "@/components/nav";
import Container from "@/components/container";
import Entries from "@/components/entries";

import { useEntries } from "@/lib/swr-hooks";

export default function IndexPage() {
  const { entries, isLoading } = useEntries();
  const [showOnlyNonIssued, setShshowOnlyNonIssued] = useState(false);

  return (
    <div>
      <Nav
        showOnlyNonIssuedState={[showOnlyNonIssued, setShshowOnlyNonIssued]}
      />
      <Container>
        {isLoading ? (
          <>
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
            <div className="my-4" />
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
            <div className="my-4" />
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
          </>
        ) : (
          <Entries entries={entries} showOnlyNonIssued={showOnlyNonIssued} />
        )}
      </Container>
    </div>
  );
}
