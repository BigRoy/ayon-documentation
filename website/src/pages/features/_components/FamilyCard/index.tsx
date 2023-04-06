import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.scss";
import { Family } from "../../../../data";
import Link from "@docusaurus/Link";

function FamilyCard({ family }: { family: Family }) {
    return (
        <li
            key={family.title}
            className={clsx("card", "shadow--md", styles.card)}
        >
            <Link
                href={`/docs/artist_publish${
                    family.docs ? family.docs : "#families"
                }`}
            >
                <div className="card__body">
                    <div className={clsx(styles.header)}>
                        <span className="material-symbols-outlined">
                            {family.icon}
                        </span>
                        <Heading as="h4" className={styles.title}>
                            {family.title}
                        </Heading>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default React.memo(FamilyCard);
