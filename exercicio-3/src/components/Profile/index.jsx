import Title from "../Title";
import ProfileSection from "./ProfileSection";
import styles from "./styles.module.css";
import LinkButton from "../LinkButton";
import { useState } from "react";

export default function Profile(props) {
	// [valor, funcaoModificadora]	= useState(valorInicial)
	const [followText, setFollowText] = useState("Follow");

	function handleClick(ev) {
		alert("Você agora está seguindo!");
		setFollowText("Following");
	}

	return (
		<div className={styles.container}>
			<img className={styles.avatar} src={props.avatar} alt={props.name} />
			<Title>
				<span>Name: </span>
				{props.name}
				<button onClick={handleClick} className={styles.followButton}>
					{followText}
				</button>
			</Title>
			<ProfileSection>{props.bio}</ProfileSection>
			<ProfileSection>{props.phone}</ProfileSection>
			<ProfileSection>{props.email}</ProfileSection>
			<ProfileSection
				className={styles.links}
				id="links-section"
				data-test="some value"
				arial-label="social links"
			>
				<div>
					<LinkButton href={props.githubUrl} target="_blank">
						GitHub
					</LinkButton>
					<LinkButton href={props.linkedinUrl} target="_blank">
						LinkedIn
					</LinkButton>
					<LinkButton href={props.twitterUrl} target="_blank">
						Twitter
					</LinkButton>
				</div>
			</ProfileSection>
		</div>
	);
}
