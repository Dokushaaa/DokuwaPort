import React from "react";

type Props = {};
const LazyComponent = React.lazy(() => import("../partials/HeaderOpen"));

const PageLearnSuspense = (props: Props) => {
	return (
		<>
			{/* {!isOpen && (
					<div className='border-2 border-accent'>
						<React.Suspense>
							<LazyComponent headerListRender={headerListRender} />
						</React.Suspense>
					</div>
				)} */}
		</>
	);
};

export default PageLearnSuspense;
