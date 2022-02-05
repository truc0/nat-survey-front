import axios from 'axios';

import { API_BASE_URL } from '@/config';
import { Station } from '@/types/station';

interface IndexResponse {
    data: Station[];
    total: number;
}

export function fetchStations(): Promise<IndexResponse> {
    return axios.get<IndexResponse>(API_BASE_URL)
            .then(response => response.data);
}