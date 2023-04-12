import { LoadFromUrl } from '../../components/loadSourceData/LoadFromUrl';
import { Orchestrator } from '../../components/orchestrator';
import { Formulaire } from '../../components/formulaire';
import { Layout } from '../../components/layout/Layout';
import { Precedent } from '../../components/navigation/Precedent';
import { Continuer } from '../../components/navigation/Continuer';

const RP = {
	source: '/rp/source.json',
	data: '/rp/data.json',
	metadata: '/rp/metadata.json',
	nomenclatures: {
		'libelles-PCS2020': '/rp/nomenclatures/libelles-PCS2020.json',
		'communes-2019': '/rp/nomenclatures/communes-2019.json',
	},
};

function onChange() {}

export function Visualize() {
	return (
		<LoadFromUrl
			urlSource={RP.source}
			urlData={RP.data}
			urlMetadata={RP.metadata}
			urlNomenclatures={RP.nomenclatures}
		>
			<Layout>
				<Orchestrator onChange={onChange}>
					<Precedent />
					<Formulaire />
					<Continuer />
				</Orchestrator>
			</Layout>
		</LoadFromUrl>
	);
}