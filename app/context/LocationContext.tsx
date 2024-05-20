import React, {
	createContext,
	useState,
	useEffect,
	useContext,
	Dispatch,
	SetStateAction,
} from "react";

type LocationContextProps = {
	state: string;
	city: string;
	setState: (state: string) => void;
	setCity: Dispatch<SetStateAction<string>>;
	isReady: boolean;
};

const LocationContext = createContext<LocationContextProps>({
	state: "",
	city: "",
	setState: () => {},
	setCity: () => {},
	isReady: false,
});

const LocationProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, setState] = useState("maharashtra");
	const [city, setCity] = useState("mumbai");

	const isReady = state !== "" && city !== "";

	useEffect(() => {}, []);

	const setStateAndResetCity = (state: string) => {
		setState(state);
		setCity("");
	};

	return (
		<LocationContext.Provider
			value={{ state, city, setState: setStateAndResetCity, setCity, isReady }}
		>
			{children}
		</LocationContext.Provider>
	);
};

const useLocation = () => useContext(LocationContext);

export { LocationProvider, useLocation };
