"use client";

import { ReactNode } from "react";
import { StoreProvider } from "./StoreContext";

export default function StoreProviderWrapper({
	children,
}: {
	children: ReactNode;
}) {
	return <StoreProvider>{children}</StoreProvider>;
}
