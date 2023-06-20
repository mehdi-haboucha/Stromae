import { useEffect } from 'react';
import { ComponentType } from '../../typeLunatic/type-source';

function getTitle(title: string, sequence: ComponentType) {
	const { label } = sequence;
	if (typeof label === 'string') {
		return label;
	}
	return title;
}

export function useTitle(title: string, components: Array<ComponentType> = []) {
	useEffect(() => {
		const sequence = components.find(
			({ componentType }) => componentType === 'Sequence'
		);

		if (sequence) {
			document.title = getTitle(title, sequence);
		}
	}, [title, components]);
}
