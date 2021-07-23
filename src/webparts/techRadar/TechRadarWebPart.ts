import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TechRadarWebPart.module.scss';
import * as strings from 'TechRadarWebPartStrings';

export interface ITechRadarWebPartProps {
  description: string;
}

import buildRadar from './RadarClass';

import customHTML from './radar_Visuals';

export default class TechRadarWebPart extends BaseClientSideWebPart<ITechRadarWebPartProps> {

  public render(): void {
    
      this.domElement.outerHTML = customHTML.templateHTML;
      //buildRadar.buildRadar();
      buildRadar.radar_visualization({
      svg_id: "radar",
      width: 810,
      height: 1200,
      colors: {
        background: "#fff",
        grid: "#bbb",
        inactive: "#ddd"
      },
      title: "Elantis Tech Radar / Core Context — 2021.05",
      quadrants: [{
        name: "Business Process Automation"
      }, {
        name: "Business Intelligence"
      }, {
        name: "Enterprise Content Management"
      }, {
        name: "Business Process Management"
      }],
      rings: [
        /*{
        name: "CONSIDER",
        color: "#9c9b9b"
    }, */
        {
          name: "MANAGE",
          color: "#9c9b9b"
        }, {
          name: "STRATEGIC",
          color: "#94A187"
        }, {
          name: "FUTURE GROWTH",
          color: "#ff6600"
        }, {
          name: "DISTRACTION",
          color: "#000000"
        }
      ],
      print_layout: true,
      // zoomed_quadrant: 0,
      //ENTRIES
      entries: [{
        quadrant: 2,
        ring: 0,
        label: "Live Tiles",
        active: false,
        link: "https://elantis.sharepoint.com/sites/CC/SitePages/Enterprise-Content-Management.aspx",
        moved: 0
      },

      {
        quadrant: 2,
        ring: 1,
        label: "Valo",
        active: false,
        link: "https://elantis.sharepoint.com/sites/CC/SitePages/Enterprise-Content-Management.aspx",
        moved: 0
      }, {
        quadrant: 2,
        ring: 1,
        label: "Teams",
        active: false,
        link: "https://elantis.sharepoint.com/sites/CC/SitePages/Enterprise-Content-Management.aspx",
        moved: 0
      }, {
        quadrant: 3,
        ring: 1,
        label: "Promapp",
        active: false,
        link: "../data_processing/promapp.html",
        moved: 0
      }, {
        quadrant: 0,
        ring: 1,
        label: "Power Apps",
        active: false,
        link: "../data_processing/powerapps.html",
        moved: 0
      }, {
        quadrant: 0,
        ring: 1,
        label: "Power Automate",
        active: false,
        link: "../data_processing/powerautomate.html",
        moved: 0
      }, {
        quadrant: 2,
        ring: 0,
        label: "SP Health Checks",
        active: false,
        link: "https://elantis.sharepoint.com/sites/CC/SitePages/Enterprise-Content-Management.aspx",
        moved: 0
      }, {
        quadrant: 2,
        ring: 0,
        label: "SP Migrations",
        active: false,
        link: "https://elantis.sharepoint.com/sites/CC/SitePages/Enterprise-Content-Management.aspx",
        moved: 0
      }, {
        quadrant: 2,
        ring: 3,
        label: "SP 2010",
        active: false,
        link: "https://elantis.sharepoint.com/sites/CC/SitePages/Enterprise-Content-Management.aspx",
        moved: 0
      }, {
        quadrant: 2,
        ring: 3,
        label: "SP 2013",
        active: false,
        link: "../data_processing/SP2013.html",
        moved: 0
      }, {
        quadrant: 0,
        ring: 0,
        label: "Nintex Forms",
        active: false,
        link: "../data_processing/nintexforms.html",
        moved: 0
      }, {
        quadrant: 0,
        ring: 0,
        label: "Nintex Workflow",
        active: false,
        link: "../data_processing/nintexworkflow.html",
        moved: 0
      }, {
        quadrant: 2,
        ring: 0,
        label: "Managed Services",
        active: false,
        link: "https://elantis.sharepoint.com/sites/CC/SitePages/Enterprise-Content-Management.aspx",
        moved: 0
      }, {
        quadrant: 0,
        ring: 0,
        label: "Managed Services",
        link: "../data_processing/managedservicesq0.html",
        moved: 0
      }, {
        quadrant: 2,
        ring: 2,
        label: "Microsoft 365 Assessments",
        active: false,
        link: "https://elantis.sharepoint.com/sites/CC/SitePages/Enterprise-Content-Management.aspx",
        moved: 0
      }, {
        quadrant: 2,
        ring: 2,
        label: "Microsoft 365 Maturity",
        active: false,
        link: "https://elantis.sharepoint.com/sites/CC/SitePages/Enterprise-Content-Management.aspx",
        moved: 0
      }, {
        quadrant: 2,
        ring: 2,
        label: "Collabware",
        active: false,
        link: "https://elantis.sharepoint.com/sites/CC/SitePages/Enterprise-Content-Management.aspx",
        moved: 0
      }, {
        quadrant: 0,
        ring: 2,
        label: "Nintex RPA",
        active: false,
        link: "../data_processing/nintexfoxtrotrpa.html",
        moved: 0
      }, {
        quadrant: 0,
        ring: 2,
        label: "Nintex Sign",
        active: false,
        link: "../data_processing/nintexsign.html",
        moved: 0
      }, {
        quadrant: 1,
        ring: 1,
        label: "MS Power Bi",
        active: false,
        link: "../data_processing/nintexsign.html",
        moved: 0
      },]
      //ENTRIES

    });
    //this.domElement.outerHTML = customHTML.templateHTML;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
