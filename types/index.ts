export type HeaderProps = {
  type: "title" | "greeting";
  title: string;
  user?: string;
  subTitle: string;
};

export type BalanceBoxProps = {
  bankAccounts: any[];
  accountCounts: number;
  totalAccountBalance: number;
};

export type RightSidebarProps = {
  user: {
    firstName: string;
    lastName: string;
    img?: string;
    email: string;
  };
  // TODO: might need to update it according ro the type of data we receive
  banks: {
    bankName: string;
    cardNumber: string;
    exp: string;
    userName: string;
    balance: number;
    showBalance: boolean;
    cardProvider: string;
  }[];
};

export type bandCardProps = {
  bankName: string;
  cardNumber: string;
  exp: string;
  userName: string;
  balance: number;
  showBalance: boolean;
  cardProvider: string;
};
