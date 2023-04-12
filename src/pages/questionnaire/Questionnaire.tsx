import { useParams } from 'react-router-dom';
import { useDocumentTitle } from '../../useDocumentTitle';
import { Orchestrator } from '../../components/orchestrator';
import { Layout } from '../../components/layout';
import { Precedent } from '../../components/navigation/Precedent';
import { Continuer } from '../../components/navigation/Continuer';
import { Formulaire } from '../../components/formulaire';
import { LoadFromApi } from '../../components/loadSourceData/LoadFromApi';
import { OidcSecure } from '../../lib/oidc';
import { AlertesControles } from '../../components/AlertesControles';
import { AlertesSaving } from '../../components/AlertSaving/AlertesSaving';
import { Grid } from '../../components/Grid/Grid';

export type QuestionnaireParams = {
	survey?: string;
	unit?: string;
};

export type QuestionnaireProps = {};

const FEATURES = ['VTL', 'MD'];
const COLLECTED = 'COLLECTED';

export function Questionnaire(props: QuestionnaireProps) {
	const { survey, unit } = useParams();

	useDocumentTitle('Questionnaire');
	return (
		<OidcSecure>
			<LoadFromApi survey={survey} unit={unit}>
				<Layout>
					<Orchestrator features={FEATURES} savingType={COLLECTED}>
						<Precedent />
						<Grid>
							<AlertesSaving />
							<AlertesControles />
							<Formulaire />
							<Continuer />
						</Grid>
					</Orchestrator>
				</Layout>
			</LoadFromApi>
		</OidcSecure>
	);
}