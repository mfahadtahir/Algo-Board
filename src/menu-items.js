export default {
  items: [
    {
      id: "algorithams",
      title: "ALGORITHAMS",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "sets",
          title: "Sets",
          type: "collapse",
          icon: "feather icon-box",
          children: [
            {
              id: "lcs",
              title: "LCS",
              type: "item",
              url: "/sets/lcs",
            },
            {
              id: "lis",
              title: "LIS",
              type: "item",
              url: "/sets/lis",
            },
            {
              id: "scs",
              title: "SCS",
              type: "item",
              url: "/sets/scs",
            },
            {
              id: "knapsack",
              title: "Knapsack",
              type: "item",
              url: "/sets/knapsack",
            },
          ],
        },
      ],
    },
    {
      id: "navigation",
      title: "Navigation",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: "/dashboard/default",
          icon: "feather icon-home",
        },
      ],
    },
    {
      id: "ui-element",
      title: "UI ELEMENT",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "basic",
          title: "Component",
          type: "collapse",
          icon: "feather icon-box",
          children: [
            {
              id: "button",
              title: "Button",
              type: "item",
              url: "/basic/button",
            },
            {
              id: "badges",
              title: "Badges",
              type: "item",
              url: "/basic/badges",
            },
            {
              id: "breadcrumb-pagination",
              title: "Breadcrumb & Pagination",
              type: "item",
              url: "/basic/breadcrumb-paging",
            },
            {
              id: "collapse",
              title: "Collapse",
              type: "item",
              url: "/basic/collapse",
            },
            {
              id: "tabs-pills",
              title: "Tabs & Pills",
              type: "item",
              url: "/basic/tabs-pills",
            },
            {
              id: "typography",
              title: "Typography",
              type: "item",
              url: "/basic/typography",
            },
            {
              id: "charts",
              title: "Charts",
              type: "item",
              icon: "feather icon-pie-chart",
              url: "/charts/nvd3",
            },
            {
              id: "form-basic",
              title: "Form Elements",
              type: "item",
              url: "/forms/form-basic",
              icon: "feather icon-file-text",
            },
            {
              id: "bootstrap",
              title: "Table",
              type: "item",
              icon: "feather icon-server",
              url: "/tables/bootstrap",
            },
          ],
        },
      ],
    },
  ],
};
