import * as lunatic from '@inseefr/lunatic';
import { useEffect, useState } from 'react';
import { ComponentType } from '../../typeLunatic/type-source';
import { OrchestratedElement } from '../../typeStromae/type';
import { LunaticComponentContainer } from './LunaticComponentContainer';

export function Formulaire(props: OrchestratedElement) {
	const { getComponents, currentErrors, disabled = false } = props;
	const [components, setComponents] = useState<Array<ComponentType>>([]);

	useEffect(
		function () {
			if (typeof getComponents === 'function') {
				setComponents(getComponents());
			}
		},
		[getComponents]
	);

	return (
		<form>
			{components.map(function (component: ComponentType) {
				const { componentType, id } = component;
				if (componentType in lunatic) {
					const Component = lunatic[componentType];

					return (
						<LunaticComponentContainer key={id} id={id}>
							<Component
								key={id}
								{...component}
								errors={currentErrors}
								disabled={disabled}
							/>
						</LunaticComponentContainer>
					);
				}
				return null;
			})}
		</form>
	);
}