import React, { PropsWithChildren } from "react";

type IfProps = PropsWithChildren<{
	condition: boolean;
	otherwise?: React.ReactNode;
}>;

const If = ({ children, condition, otherwise }: IfProps) => {
	return <>{condition ? children : otherwise}</>;
};

export default If;
