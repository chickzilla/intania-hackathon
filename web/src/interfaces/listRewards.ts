export interface ListRewards {
    rewards: RewardDetails[];
}

export interface RewardDetails {
    id: string;
    name: string;
    detail: string;
    imageUrl: string;
    point: number;
    isClaimed: boolean;
}
