import Profile from "./components/Profile";

export default function App() {
	return (
		<div className="app">
			<Profile
				avatar="https://randomuser.me/api/portraits/men/30.jpg"
				name="Dwight Jr"
				bio="Full-stack javascript developer at Acme Inc."
				email="dwightjr@email.com"
				phone="+55 (11) 99999-9999"
				linkedinUrl="https://www.linkedin.com/in/dwightjr/"
				githubUrl="htpps://github.com/dwightjr"
				twitterUrl="https://twitter.com/dwightjr"
			/>
		</div>
	);
}
