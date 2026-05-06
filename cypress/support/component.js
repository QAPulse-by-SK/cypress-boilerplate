/**
 * Component Testing Support — JavaScript
 * QA Pulse by SK - www.skakarh.com
 */
import "./commands.js";
import { mount } from "cypress/react18";

Cypress.Commands.add("mount", mount);
